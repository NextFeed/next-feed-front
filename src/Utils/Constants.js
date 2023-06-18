const isDev = window.location.href.includes("localhost");

export const localApiBaseUrl = isDev ? "http://localhost:3000/api" : "/api";

// export const apiBaseUrl = "http://15.164.226.30:8000";
export const apiBaseUrl = "http://127.0.0.1:8000";

export const features = {
    handsome: '잘생김',
    fit: '근육질',
    clean: '깔끔함',
    sexy: '섹시함',
    sculpted: '조각같음',
    stylish: '스타일리시함',
    suave: '우아함',
    macho: '마초',
    dandy: '댄디',
    classy: '세련된',

    beautiful: '아름다움',
    adorable: '귀여움',
    elegant: '우아함',
    glamorous: '화려함',
    athletic: '운동을 잘함',
    attractive: '매력적임',
    fashionable: '패셔너블함',
    goddess: '여신같음',
    lovely: '사랑스러움',
    pure: '순수함',
    prim: '단아한'
}