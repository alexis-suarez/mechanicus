class Product():

    def __init__(self, code, name, brand, description, importe, price):
        self.code = code
        self.name = name
        self.brand = brand
        self.description = description
        self.importe = importe
        self.price = price
        self.status = True

    def get_code(self):
        return self.code

    def get_name(self):
        return self.name

    def get_brand(self):
        return self.brand

    def get_description(self):
        return self.description
    
    def get_importe(self):
        return self.importe

    def get_price(self):
        return self.price

    def get_status(self):
        return self.status

    def set_code(self, value):
        self.code = value

    def set_name(self, value):
        self.name = value

    def set_brand(self, value):
        self.brand = value

    def set_description(self, value):
        self.description = value
    
    def set_importe(self, value):
        self.importe = value

    def set_price(self, value):
        self.price = value

    def set_status(self, value):
        self.status = value

    def json(self):
        return {
            "Code":self.code,
            "Name":self.name,
            "Brand":self.brand,
            "Description":self.description,
            "Import":self.importe,
            "Price":self.price,
            "Stock":None,
            "Status":self.status
        }