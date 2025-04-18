import sys
import json
import face_recognition
import pickle
from pathlib import Path
import shutil
from datetime import datetime

BASE_DIR = Path(__file__).resolve().parent.parent  # points to /backend
ENCODINGS_PATH = BASE_DIR / "services" / "output" / "encodings.pkl"

def main():
    image_path = sys.argv[1]

    with open(ENCODINGS_PATH, "rb") as f:
        known_data = pickle.load(f)

    known_encodings = known_data["encodings"]
    known_names = known_data["names"]

    unknown_image = face_recognition.load_image_file(image_path)
    face_locations = face_recognition.face_locations(unknown_image)
    face_encodings = face_recognition.face_encodings(unknown_image, face_locations)

    matches = []
    for face_encoding in face_encodings:
        results = face_recognition.compare_faces(known_encodings, face_encoding)
        for i, match in enumerate(results):
            if match:
                matches.append(known_names[i])
                break

    print(json.dumps(matches))

if __name__ == "__main__":
    main()
