export class CustomResponse {
    data: any;
    message: string;
    status: number;
    constructor(data: any, message: string, status?: number) {
        this.data = data || null;
        this.message = message || 'Operation completed successfully';
        this.status = status || 200;
    }
}
