export default (text)=>{
    const result = refs[text]
    return result?result:text
}

const refs = {
    home: '主页'
}