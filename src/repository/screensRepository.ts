import { database } from "../../prisma/index.js";

export async function  CreateNewScreen(screen_name: string, user_id: number, background_url: string){
    return await database.user_screen.create({
        data: {
            screen_name,
            user_id,
            background_url
        }
    })
   
}

export async function FindScreens(user_id: number){
    return await database.user_screen.findMany({
        where: {
            user_id
        }
    })
}

export async function FindScreenById(id: number){
    return await database.user_screen.findUnique({
        where:{
            id
        }
    })
}
       
export async function UpdateScreenById(id: number, content: Screen ){
    return await database.user_screen.update({
        where: {
            id
        },
        data: {
            background_url: content.background_url,
            font_family: content.font_family,
            font_size: content.font_size,
            screen_name: content.screen_name,
            show_banner: content.show_banner,
            show_counter: content.show_counter,
            show_productstable: content.show_productstable,
            space_lines: content.space_lines,
            table_lines: content.table_lines,
            user_id: content.user_id,
            color_lines: content.color_lines,
            width_table: content.width_table,
            price_position: content.price_position,
            product_position: content.product_position,
            background_color_title: content.background_color_title,
            font_family_title: content.font_family_title,
            color: content.color,
            color_title: content.color_title,
            banner_time: content.banner_time,
            bold: content.bold,
            italic: content.italic,
            product_time: content.product_time,
            logo_height: content.logo_height,
            logo_opacity: content.logo_opacity,
            color_promotional_line: content.color_promotional_line,
            color_promotional: content.color_promotional
        }
    })
}

export async function DeleteScreenById(id: number){
    return await database.user_screen.delete({
        where:{
            id
        } 
    })
}

export type Screen = {
    background_url: string,
    font_family: string,
    font_size: number,
    id: number,
    screen_name: string,
    show_banner: boolean,
    show_counter: boolean,
    show_productstable: boolean,
    space_lines: number,
    table_lines: number,
    user_id: number,
    color_lines: string,
    width_table: number,
    price_position: string,
    product_position: string,
    background_color_title: string,
    font_family_title: string,
    color: string,
    color_title: string,
    banner_time: number,
    bold: boolean,
    italic: boolean,
    product_time: number,
    logo_height: number
    logo_opacity: number,
    color_promotional_line: string,
    color_promotional: string
}