from Address import Address

class Client():

    def __init__(self, name, address, rfc, mobile, phone, email):
        self._name = name
        self._address = address
        self._auto = []
        self._rfc = rfc
        self._phone = phone
        self._email = email
        self._status = True

    def get_name(self):
        return self._name
    
    def get_address(self):
        return self._address

    def get_auto(self):
        return self._auto

    def get_rfc(self):
        return self._rfc

    def get_phone(self):
        return self._phone

    def get_email(self):
        return self._email

    def get_status(self):
        return self._status
    
    def json(self):
        return {
            "name":self._name,
            "address":self._address.json(),
            "RFC":self._rfc,
            "mobile":self._mobile,
            "phone":self._phone,
            "email":self._email,
            "status":self._status
        }