class Logger():
    _priority = 0

    @staticmethod
    def setPriority(prio):
        _priority = prio

    @staticmethod
    def log(prio, text):
        if prio > _priority:
            print("LOGGER: %s" % text)
