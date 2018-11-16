import datetime

class Service():

    def __init__(self, id_service, automobile, employee, description):
        self._id_service = id_service
        self._automobile = automobile
        self._employee = employee
        date = datetime.datetime.now()
        self._entredate = (date.day + "-" + date.month + "-" + date.year)
        self._endeddate = None
        self._description = description
        self._status = True

    def get_id_service(self):
        return self._id_service

    def get_automobile(self):
        return self._automobile

    def get_employee(self):
        return self._employee

    def get_entredate(self):
        return self._entredate

    def get_endeddate(self):
        return self._endeddate

    def get_description(self):
        return self._description

    def get_status(self):
        return self._status

    def set_id_service(self, value):
        self._id_service = value

    def set_automobile(self, value):
        self._automobile = value

    def set_employee(self, value):
        self._employee = value

    def set_entredate(self, value):
        self._entredate = value

    def set_endeddate(self, value):
        self._endeddate = value

    def set_description(self, value):
        self._description = value

    def set_status(self, value):
        self._status = value

    def json(self):
        return  {
            "Id_Service":self._id_service,
            "Automobile":self._automobile,
            "Employee":self._employee,
            "Entre Date":self._entredate,
            "Ended Date":self._endeddate,
            "Description":self._description,
            "Status":self._status
        }