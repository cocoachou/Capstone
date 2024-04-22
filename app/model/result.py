import os
import json
from probs import probs

save_path = "app/data/result.json"

def result(folder_path):
    file_list = os.listdir(folder_path)

    if file_list:
        first_file = file_list[0]
        output = probs(os.path.join(folder_path, first_file))
        
        lines = output.strip().split('\n')
        
        image_path = lines[0]
        
        probabilities = [float(line.split()[1]) for line in lines[1:]]
        
        top3_probs = sorted(probabilities, reverse=True)[:3]
        
        if top3_probs:
            result_value = 1
        else:
            result_value = 0
            
        result_dict = {
            "result": result_value
        }
            
        with open(save_path, 'w') as json_file:
            json.dump(result_dict, json_file)
        
        return result_value
    else:
        return 0
    
    