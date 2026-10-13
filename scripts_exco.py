"""One-off: process the real Taxila Central College EXCO photos into
public/images/board/. Not part of the app — safe to delete after running."""
import sys
from pathlib import Path
from PIL import Image, ImageOps

sys.stdout.reconfigure(encoding="utf-8")

SRC = Path(r"C:\Users\Dulanjana\Downloads\thakshila")
DST = Path(r"public\images\board")
DST.mkdir(parents=True, exist_ok=True)


def process(src_name: str, dst_name: str, max_edge: int = 1100, quality: int = 87):
    img = Image.open(SRC / src_name)
    img = ImageOps.exif_transpose(img).convert("RGB")
    w, h = img.size
    scale = max_edge / max(w, h)
    if scale < 1:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    img.save(DST / dst_name, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{dst_name}: {img.size[0]}x{img.size[1]}")


process("LEO Denuwan Chamath - President.jpg", "denuwan-chamath.jpg")
process("LEO Sanija Indeepa - Immediate Past Club President.jpg", "sanija-indeepa.jpg")
process("LEO Runithi Nuwanma - 1st Vice President.jpg", "runithi-nuwanma.jpg")
process("LEO Hesandu Sathiraka - 2nd Vice President.jpg", "hesandu-sathiraka.jpg")
process("LEO Pulathi Liyansa - Secretary.jpg", "pulathi-liyansa.jpg")
process("LEO Thenuki Thimasha - Treasurer.jpg", "thenuki-thimasha.jpg")
process("LEO Bihanga Romindi - Assistant Secretary.jpg", "bihanga-romindi.jpg")
process("LEO Budhitha Sathnindu - Chief Editor.jpg", "budhitha-sathnindu.jpg")
