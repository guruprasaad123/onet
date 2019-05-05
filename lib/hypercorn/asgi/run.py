import h11


class WrongProtocolError(Exception):
    def __init__(self, request: h11.Request) -> None:
        self.request = request


class WebsocketProtocolRequired(WrongProtocolError):
    pass


class H2CProtocolRequired(WrongProtocolError):
    pass


class H2ProtocolAssumed(WrongProtocolError):
    def __init__(self, data: bytes) -> None:
        self.data = data
