
export interface IComment {
    id?: number,
    post_id: string,
    title: string,
    is_active?:boolean,
    user_id: number,
    attachments :Express.Multer.File[],
    uuid: string,
    created_at: Date,
    updated_at: Date,
}


