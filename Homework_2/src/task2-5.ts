type HandlerFuncType = (...args: any[]) => void;

class MyEventEmitter {
    private handlersDict: { [eventName: string]: HandlerFuncType[] } = {};

    public registerHandler(eventName: string, handlerFunc: HandlerFuncType): void {
        if (!(eventName in this.handlersDict)) {
            this.handlersDict[eventName] = [];
        }
        this.handlersDict[eventName].push(handlerFunc);
    }

    public emitEvent(eventName: string, ...args: any[]): void {
        if (eventName in this.handlersDict) {
            for (const handlerFunc of this.handlersDict[eventName]) {
                handlerFunc(...args);
            }
        }
    }
}

const emitter = new MyEventEmitter();

emitter.registerHandler('usedUpdated', () => console.log('User was updated'));

emitter.emitEvent('usedUpdated'); // User was updated