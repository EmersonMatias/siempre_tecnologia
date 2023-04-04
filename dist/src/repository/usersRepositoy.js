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
export function createNewUser(signupData) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, password, phone, city, adress, price, account_type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = signupData.name, email = signupData.email, password = signupData.password, phone = signupData.phone, city = signupData.city, adress = signupData.adress, price = signupData.price, account_type = signupData.account_type;
                    if (!!account_type) return [3 /*break*/, 2];
                    return [4 /*yield*/, database.user.create({
                            data: {
                                name: name,
                                email: email,
                                password: password,
                                phone: phone,
                                city: city,
                                adress: adress,
                                price: price,
                                active: true,
                                account_type: "user"
                            }
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, database.user.create({
                        data: {
                            name: name,
                            email: email,
                            password: password,
                            phone: phone,
                            city: city,
                            adress: adress,
                            price: price,
                            active: true,
                            account_type: account_type
                        }
                    })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function findEmailByName(email) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.findUnique({
                        where: {
                            email: email
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function findUsers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.findMany({
                        where: {
                            account_type: "user"
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function upadteStatusAccount(dataUpdate, id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.update({
                        data: {
                            active: dataUpdate
                        },
                        where: {
                            id: id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function updateUserNameById(userId, newName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.update({
                        data: {
                            name: newName
                        },
                        where: {
                            id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function updateUserPhoneById(userId, newPhone) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.update({
                        data: {
                            phone: newPhone
                        },
                        where: {
                            id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function updateUserCityById(userId, newCity) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.update({
                        data: {
                            city: newCity
                        },
                        where: {
                            id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function updateUserAdressById(userId, newAdress) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.update({
                        data: {
                            adress: newAdress
                        },
                        where: {
                            id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function updateUserPriceById(userId, newPrice) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user.update({
                        data: {
                            price: newPrice
                        },
                        where: {
                            id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function deleteUserById(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user["delete"]({
                        where: {
                            id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function deleteUserFiles(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_files.deleteMany({
                        where: {
                            user_id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function deleteUserProducts(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_Products.deleteMany({
                        where: {
                            user_id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function deleteUserScreen(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen.deleteMany({
                        where: {
                            user_id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function deleteUserScreenProducts(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database.user_screen_products.deleteMany({
                        where: {
                            user_id: userId
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
