var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { database } from "../../prisma/index.js";
export function CreateNewScreen(screen_name, user_id, background_url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen.create({
                        data: {
                            screen_name: screen_name,
                            user_id: user_id,
                            background_url: background_url
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function FindScreens(user_id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen.findMany({
                        where: {
                            user_id: user_id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function FindScreenById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen.findUnique({
                        where: {
                            id: id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function UpdateScreenById(id, content) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen.update({
                        where: {
                            id: id
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
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function DeleteScreenById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen["delete"]({
                        where: {
                            id: id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
