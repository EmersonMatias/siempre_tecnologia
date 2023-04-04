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
import { DeleteAllPromotionalProducts, DeleteAllScreenProducts } from "../repository/productsRepository.js";
import { CreateNewScreen, DeleteScreenById, FindScreenById, FindScreens, UpdateScreenById } from "../repository/screensRepository.js";
import { deleteAllScreenFiles } from "../repository/userFilesRepository.js";
export function CreateScreen(screen_name, id, screen_type) {
    return __awaiter(this, void 0, void 0, function () {
        var background_url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!screen_name || !id || !screen_type)
                        throw { message: "error", status: 404 };
                    if (typeof (screen_name) !== "string")
                        throw { message: "error", status: 404 };
                    background_url = "";
                    if (screen_type === "açogue") {
                        background_url = "https://siempre-tecnologia-test-bucket.s3.sa-east-1.amazonaws.com/f4f9ffc6-ff32-4ccd-8590-eb87fd96960e_background2.png";
                    }
                    else if (screen_type === "padaria") {
                        background_url = "https://siempre-tecnologia-test-bucket.s3.sa-east-1.amazonaws.com/c223f2fa-bf65-436a-b2b5-6e2f7fb19958_back%201.png";
                    }
                    return [4 /*yield*/, CreateNewScreen(screen_name, id, background_url)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function GetScreens(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id)
                        throw { message: "error", status: 404 };
                    return [4 /*yield*/, FindScreens(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function GetScreen(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id)
                        throw { message: "error", status: 404 };
                    return [4 /*yield*/, FindScreenById(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function UpdateScreen(id, content) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id)
                        throw { message: "error", status: 404 };
                    return [4 /*yield*/, UpdateScreenById(id, content)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function DeleteScreen(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id)
                        throw { message: "error", status: 404 };
                    return [4 /*yield*/, DeleteAllPromotionalProducts(id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, DeleteAllScreenProducts(id)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, deleteAllScreenFiles(id)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, DeleteScreenById(id)];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export var screenService = {
    CreateScreen: CreateScreen,
    GetScreens: GetScreens,
    GetScreen: GetScreen,
    UpdateScreen: UpdateScreen,
    DeleteScreen: DeleteScreen
};
