class Address():
    
    def __init__(self, street, number, suburb, city):
        self._street = street
        self._number = number
        self._suburb = suburb
        self._city = city

    def get_street(self):
        return self._street

    def get_number(self):
        return self._number

    def get_suburb(self):
        return self._suburb

    def get_city(self):
        return self._city

    def set_street(self, street):
        self._street = street

    def set_number(self, number):
        self._number = number

    def set_suburb(self, suburb):
        self._suburb = suburb

    def set_city(self, city):
        self._city = city

    def to_json(self):
        return {
            "street":self._street,
            "number":self._number,
            "suburb":self._suburb,
            "city":self._city
        }