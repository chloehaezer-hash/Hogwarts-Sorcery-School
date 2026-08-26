from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


# =========================
# FOLDER PROJECT
# =========================

BASE_DIR = Path(__file__).parent

TEMPLATE_DIR = BASE_DIR / "templates"
PHOTO_DIR = BASE_DIR / "photos"
OUTPUT_DIR = BASE_DIR / "output"

OUTPUT_DIR.mkdir(exist_ok=True)


# =========================
# FILE
# =========================

template_path = TEMPLATE_DIR / "IDC AURELION.png"
photo_path = PHOTO_DIR / "aurelion.jpeg"

output_path = OUTPUT_DIR / "Aurelion_IDC_TEST.png"


# =========================
# BACA FILE
# =========================

template = Image.open(template_path).convert("RGBA")
photo = Image.open(photo_path).convert("RGBA")

print("Ukuran template:", template.size)
print("Ukuran foto:", photo.size)


# =========================
# FOTO SISWA
# =========================

photo_width = 350
photo_height = 400

photo.thumbnail((photo_width, photo_height))

# Posisi foto
photo_x = 500
photo_y = 150


# =========================
# LAYER FOTO
# =========================

photo_layer = Image.new(
    "RGBA",
    template.size,
    (0, 0, 0, 0)
)

photo_layer.alpha_composite(
    photo,
    (photo_x, photo_y)
)


# =========================
# GABUNGKAN FOTO + TEMPLATE
# =========================

result = Image.alpha_composite(
    photo_layer,
    template
)


# =========================
# TAMBAHKAN NAMA
# =========================

draw = ImageDraw.Draw(result)

font = ImageFont.load_default(size=32)

name = "AURELION STUDENT"

# Posisi nama
name_x = 40
name_y = 300

draw.text(
    (name_x, name_y),
    name,
    fill="black",
    font=font
)


# =========================
# SIMPAN
# =========================

result.save(output_path, "PNG")

print("IDC berhasil dibuat!")
print("Lokasi:", output_path)