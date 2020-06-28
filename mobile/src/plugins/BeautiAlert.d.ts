export declare class BeautiAlert<T> {
    private alert_message;
    private alert_style;
    private alert_option;
    private alert_timeout;
    constructor(alert_message: string, alert_style: Object, alert_option: Object, alert_timeout: number);
    showAlert(): T;
}