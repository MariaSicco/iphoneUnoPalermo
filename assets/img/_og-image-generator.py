"""
Generador del og-image para iPhone Uno Palermo.
Output: assets/img/og-image.png (1200 x 630)

Este script es un PLACEHOLDER. Cuando el cliente tenga una foto-render del
producto o un mockup más cuidado, reemplazar el archivo og-image.png a mano
y borrar este script.

Uso:
    cd assets/img
    python3 _og-image-generator.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import os

W, H = 1200, 630
BONE = (245, 241, 232)
INK = (14, 14, 14)
STEEL = (107, 107, 107)
PULSE = (255, 77, 46)

img = Image.new("RGB", (W, H), BONE)
draw = ImageDraw.Draw(img)

# ---------- Fonts ----------
# Tratamos de levantar Inter Tight si está instalado en el sistema; caemos a
# Helvetica/sans-serif del sistema si no hay nada.
def try_font(candidates, size):
    for path in candidates:
        if path and Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()

mac_fonts = [
    "/System/Library/Fonts/HelveticaNeue.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]
mac_mono = [
    "/System/Library/Fonts/Menlo.ttc",
    "/System/Library/Fonts/Monaco.dfont",
    "/System/Library/Fonts/SFNSMono.ttf",
]

display_lg = try_font(mac_fonts, 96)
display_md = try_font(mac_fonts, 56)
mono_sm = try_font(mac_mono, 22)

# ---------- Margenes ----------
PAD_X = 90
PAD_Y = 90

# ---------- Isotipo (iPhone in app icon) ----------
def draw_isotipo(draw, x, y, size=170, ink=INK, bone=BONE):
    """Reproducción simplificada del isotipo. Coordenadas relativas a (x, y)."""
    # Outer rounded rect (outline)
    stroke = max(4, size // 18)
    outer_pad = size * 0.10
    inner_pad = size * 0.20
    draw.rounded_rectangle(
        [(x + outer_pad, y + outer_pad * 0.6),
         (x + size - outer_pad, y + size - outer_pad * 0.4)],
        radius=int(size * 0.16),
        outline=ink,
        width=stroke,
    )
    # iPhone interior filled
    draw.rounded_rectangle(
        [(x + inner_pad, y + inner_pad * 1.05),
         (x + size - inner_pad, y + size - inner_pad * 0.9)],
        radius=int(size * 0.06),
        fill=ink,
    )
    # Camera module
    cam_x = x + inner_pad + size * 0.04
    cam_y = y + inner_pad * 1.05 + size * 0.04
    cam_size = size * 0.18
    draw.rounded_rectangle(
        [(cam_x, cam_y), (cam_x + cam_size, cam_y + cam_size)],
        radius=int(cam_size * 0.18),
        fill=bone,
    )
    # Lentes (tres puntos)
    lens_r = max(2, int(cam_size * 0.13))
    cx, cy = cam_x + cam_size * 0.30, cam_y + cam_size * 0.30
    cx2 = cam_x + cam_size * 0.70
    cy2 = cam_y + cam_size * 0.70
    for (lx, ly) in [(cx, cy), (cx2, cy), (cx, cy2)]:
        draw.ellipse([lx - lens_r, ly - lens_r, lx + lens_r, ly + lens_r], fill=ink)

draw_isotipo(draw, PAD_X, PAD_Y, size=170)

# ---------- Eyebrow mono ----------
draw.text((PAD_X, PAD_Y + 200), "— APPLE SIN VUELTAS", font=mono_sm, fill=PULSE)

# ---------- Wordmark grande ----------
title_y = PAD_Y + 220
draw.text((PAD_X, title_y), "iPhone Uno", font=display_lg, fill=INK)
draw.text((PAD_X, title_y + 95), "Palermo.", font=display_lg, fill=STEEL)

# ---------- Pie ----------
foot_y = H - PAD_Y - 10
draw.text((PAD_X, foot_y), "iphoneunopalermo.com  ·  @iphoneuno_palermo", font=mono_sm, fill=INK)

# ---------- Línea sutil divisoria ----------
draw.line([(PAD_X, foot_y - 24), (W - PAD_X, foot_y - 24)], fill=(14, 14, 14), width=1)

# ---------- Save ----------
output = Path(__file__).parent / "og-image.png"
img.save(output, "PNG", optimize=True)
print(f"og-image generado: {output} ({W}x{H})")
