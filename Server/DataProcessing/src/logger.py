class Logger():
    _priority = 0

    @staticmethod
    def setPriority(prio):
        Logger._priority = prio

    @staticmethod
    def log(prio, text):
        if prio <= Logger._priority:
            print("{}".format(text))
