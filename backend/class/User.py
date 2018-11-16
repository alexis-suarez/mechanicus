class User():

    def __init__(self, username, password):
        self._username = username
        self._password = password
        self._role = None

    def __init__(self, username, password, role):
        self._username = username
        self._password = password
        self._role = role

    def get_username(self):
        return self._username

    def get_password(self):
        return self._password

    def get_role(self):
        return self._role

    def set_username(self, value):
        self._username = value

    def set_password(self, value):
        self._password = value

    def set_role(self, value):
        self._role = role

    def json(self):
        return {
            "Username":self._username,
            "Password":self._password,
            "Role":self._role
        }