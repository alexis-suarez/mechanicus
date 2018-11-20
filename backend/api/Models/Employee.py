from Address import Address

class Employee():

    def __init__(self, Name, Address, nss, rfc, curp, phone, birth_date, start_date, salary, role):
        self._name = Name
        self._address = Address
        self._nss = nss
        self._rfc = rfc
        self._curp = curp
        self._phone = phone
        self._birth_date = birth_date
        self._salary = salary
        self._role = role
        self._status = True

    def get_name(self):
        return self._name

    def get_address(self):
        return self._address

    def get_nss(self):
        return self._nss

    def get_rfc(self):
        return self._rfc
    
    def get_curp(self):
        return self._curp

    def get_phone(self):
        return self._phone

    def get_birth_date(self):
        return self._birth_date

    def get_start_date(self):
        return self._start_date

    def get_salary(self):
        return self._salary

    def get_role(self):
        return self._role

    def get_status(self):
        return self._status

    def set_name(self, value):
        self._name = value

    def set_address(self, value):
        self._address = value

    def set_nss(self, value):
        self._nss = value

    def set_rfc(self, value):
        self._rfc = value
    
    def set_curp(self, value):
        self._curp = value

    def set_phone(self, value):
        self._phone = value

    def set_birth_date(self, value):
        self._birth_date = value

    def set_start_date(self, value):
        self._start_date = value

    def set_salary(self, value):
        self._salary = value

    def set_role(self, value):
        self._role = value

    def set_status(self, value):
        self._status = value

    def json(self):
        return {
            "name":self._name.json(),
            "address":self._address.json(),
            "nss":self._nss,
            "rfc":self._rfc,
            "curp":self._curp,
            "phone":self._phone,
            "birthdate":self._birth_date,
            "startdate":self._start_date,
            "salary":self._salary,
            "role":self._role,
            "status":self._status
        }