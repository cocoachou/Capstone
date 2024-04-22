import os

def category(image_path):
    filename = os.path.basename(image_path)
    
    animal_list = ["butterfly", "cat", "duck", "elephant", "giraffe", "owl", "penguin", "pig", "rabbit", "sheep"]
    food_list = ["apple", "cake", "carrot", "donut", "grape", "hamburger", "pizza", "strawberry", "string_bean", "banana"]
    object_list = ["airplane", "broom", "calendar", "cup", "microwave", "scissors", "table", "toothbrush", "toothpaste", "umbrella"]

    category_lists = {
        "animal": animal_list,
        "food": food_list,
        "object": object_list
    }
    
    for category, category_list in category_lists.items():
        if any(word in filename for word in category_list):
            return category_list
    return None

