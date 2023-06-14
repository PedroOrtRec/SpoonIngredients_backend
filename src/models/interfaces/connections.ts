export interface Connections{
    connect():Promise<void>;
    disconnect():Promise<void>;
}