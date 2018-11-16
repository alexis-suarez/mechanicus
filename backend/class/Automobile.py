class Automobile():

    def __init__(self, licence_plate, id_client, brand, model, cylinder, year, milage, colour):
        self._licence_plate = licence_plate
        self._brand = brand
        self._model = model
        self._cylinder = cylinder
        self._year = year
        self._milage = milage
        self._cilinder = cilinder
        self._colour = colour
        self._transmision = transmision
        self._status = True

    def get_licence_plate(self):
        return self._licence_plate

    def get_id_client(self):
        return self._id_client

    def get_brand(self):
        return self._brand

    def get_model(self):
        return self._model

    def get_cylinder(self):
        return self._cylinder
    
    def get_year(self):
        return self._year

    def get_milage(self):
        return self._milage

    def get_colour(self):
        return self._colour

    def get_status(self):
        return self._status

    def set_licence_plate(self, value):
        self._licence_plate = value

    def set_id_client(self, value):
        self._id_client = value

    def set_brand(self, value):
        self._brand = value

    def set_model(self, value):
        self._model = value

    def set_cylinder(self, value):
        self._cylinder = value
    
    def set_year(self, value):
        self._year = value

    def set_milage(self, value):
        self._milage = value

    def set_colour(self, value):
        self._colour = value

    def set_status(self, value):
        self._status = value

    def json(self):
        return {
            "Licence Plate":self._licence_plate,
            "ID Client":self._id_client,
            "Brand":self._brand,
            "Model":self._model,
            "Cylinder":self._cylinder,
            "Year":self._year,
            "Milage":self._milage,
            "Colour":self._colour,
            "Status":self._status
        }