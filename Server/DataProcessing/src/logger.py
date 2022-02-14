import platform

class Color():
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

class Logger():
    _priority = 0

    @staticmethod
    def setPriority(prio):
        Logger._priority = prio

    @staticmethod
    def log(prio, text, color=Color.ENDC):
        if prio <= Logger._priority:
            if platform.system() == 'Darwin':
                print(f'{color}{text}{Color.ENDC}')
            elif platform.system() == 'Linux':
                print(f'{color}{text}{Color.ENDC}')
            elif platform.system() == 'Windows':
                print(text)
