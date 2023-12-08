class HondaAccord:
    model = 'accord'
    brand = 'honda'
    brand_and_model = f"{brand} {model}"
    def __init__(self) -> None:
        pass

ellie = HondaAccord()

print(ellie.brand_and_model)