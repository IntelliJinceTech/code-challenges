// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(str){
    return [...str].filter(ele => ele != ' ').join('')
}

function noSpaceSplit(str) {
    return str.split(' ').join('')
}
noSpaceSplit('8 j 8   mBliB8g  imjB8B8  jl  B')