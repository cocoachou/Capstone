from CLIP import clip
import torch
from PIL import Image
import os
from category import category

def probs(image_path):
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model, preprocess = clip.load("ViT-B/32", device=device)

    text_list = category(image_path)

    text_list_sketch = ["A quick drawn doodle of " + item for item in text_list]

    text = clip.tokenize(text_list_sketch).to(device)

    image = preprocess(Image.open(image_path)).unsqueeze(0).to(device)

    with torch.no_grad():
        image_features = model.encode_image(image)
        text_features = model.encode_text(text)

        logits_per_image, logits_per_text = model(image, text)
        probs = logits_per_image.softmax(dim=-1).cpu().numpy()

    result = f"{image_path}\n"
    for label, prob in zip(text_list, probs[0]):
        result += f"{label} {round(prob.item(), 2)}\n"

    return result