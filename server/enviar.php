<?php
// Recibe el formulario de presupuesto y lo envía por email a LIDA Energía.
// Requiere que el dominio tenga correo configurado en Hostinger.

const DESTINO = 'info@lidaenergia.com';
const REMITENTE = 'web@lidaenergia.com'; // buzón del propio dominio (mejora la entrega)

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /presupuesto-placas-solares/', true, 303);
    exit;
}

// Trampa anti-spam: los humanos no rellenan este campo
if (!empty($_POST['web'])) {
    header('Location: /gracias/', true, 303);
    exit;
}

function campo(string $k, int $max = 200): string {
    $v = trim((string)($_POST[$k] ?? ''));
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr(strip_tags($v), 0, $max);
}

$nombre    = campo('nombre');
$telefono  = campo('telefono', 30);
$municipio = campo('municipio');
$tipo      = campo('tipo');
$origen    = campo('origen', 60);
$mensaje   = mb_substr(strip_tags(trim((string)($_POST['mensaje'] ?? ''))), 0, 2000);
$privacidad = !empty($_POST['privacidad']);

if ($nombre === '' || !preg_match('/^[0-9 +()\-]{9,}$/', $telefono) || $municipio === '' || !$privacidad) {
    header('Location: /presupuesto-placas-solares/?error=1', true, 303);
    exit;
}

$asunto = '=?UTF-8?B?' . base64_encode("Nuevo presupuesto web: $nombre ($municipio)") . '?=';
$cuerpo = "Nueva solicitud desde la web\n\n"
    . "Nombre: $nombre\n"
    . "Teléfono: $telefono\n"
    . "Municipio: $municipio\n"
    . "Tipo: $tipo\n"
    . "Página: $origen\n\n"
    . "Mensaje:\n$mensaje\n";

$cabeceras = "From: LIDA Energía Web <" . REMITENTE . ">\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

mail(DESTINO, $asunto, $cuerpo, $cabeceras);

header('Location: /gracias/', true, 303);
exit;
