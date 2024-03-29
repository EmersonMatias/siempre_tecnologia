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
import { productsService } from "../services/productsService.js";
export function RegisterProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, products, screen_id, sucess, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    products = req.body;
                    screen_id = Number(req.params.id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productsService.RegisterProducts(products, dataToken.id, screen_id)];
                case 2:
                    sucess = _a.sent();
                    console.log(sucess);
                    res.status(200).send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.sendStatus(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function RegisterProductScreen(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, screenIdString, product, screenId, sucess, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    screenIdString = req.params.id;
                    product = req.body;
                    screenId = Number(screenIdString);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productsService.RegisterProductsScreen(product, screenId, dataToken.id)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.send(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function GetProductsScreen(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, screenIdString, screenId, sucess, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    screenIdString = req.params.id;
                    screenId = Number(screenIdString);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productsService.GetProductsScreen(screenId, dataToken.id)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dataToken, sucess, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productsService.getAllProducts(dataToken.id)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.send(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function RegisterPromotionalProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var product_id, monitorId, dataToken, sucess, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    product_id = req.body.product_id;
                    monitorId = req.body.monitorId;
                    dataToken = req.datatoken;
                    console.log(product_id, monitorId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productsService.RegisterPromotionalProduct(Number(monitorId), product_id, dataToken.id)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.send(404);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function getPromotionalProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var screen_id, dataToken, sucess, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    screen_id = req.params.id;
                    dataToken = req.datatoken;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productsService.getPromotionalProducts(Number(screen_id), dataToken.id)];
                case 2:
                    sucess = _a.sent();
                    res.send(sucess);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log(error_6);
                    res.send(400);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
