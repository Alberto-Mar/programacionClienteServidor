// ALUMNO: ALBERTO MARTINEZ MARTINEZ
let personas=[
    ["Adrián",47, "Profesor"],
    ["Luisa",60, "Profesor"],
    ["Ana",20, "Estudiante"],
    ["Blas",36, "Estudiante"],
    ["Agustín",50, "Profesor"],
    ["Felipe",25, "Estudiante"],
    ["Pedro",19, "Estudiante"],
    ["Zoraida",36, "Estudiante"],
    ["Juan",36, "Administrativo"],
    ["Toñi",48, "Administrativo"],
    ["Juan",16, "Estudiante"],
    ["Miriam",15, "Estudiante"],
    ["Rosa",75, "Estudiante"],
    ["Pepe",31, "Estudiante"],
    ["Fermín",64, "Estudiante"],
    ["Jose",47, "Profesor"]
];
// personas.sort((p1, p2)=>{
//     if (p1[2]=="Profesor" && p2[2]!="Profesor"){
//         return -1;
//     } else if (p1[2]!="Profesor" && p2[2]=="Profesor"){
//         return 1;
//     } else if (p1[2]=="Administrativo" && p2[2]=="Estudiante"){
//     return -1;
//     } else if (p1[2]=="Estudiante" && p2[2]=="Administrativo"){
//     return 1;
//     }
//     else {
//         if (p1[1]<p2[1]){
//             return 1;
//         } else if (p1[1]>p2[1]){
//             return -1;
//         } else {
//             if (p1[0]<p2[0]){
//                 return -1;
//             } else if (p1[0]>p2[0]){
//                 return 1;
//             } else {
//                 return 0;
//             }
//         } 
//     };
// });

personas.sort((p1, p2)=>
    p1[2]=="Profesor" && p2[2]!="Profesor"? -1:
    (p1[2]!="Profesor" && p2[2]=="Profesor"? 1:
        (p1[2]=="Administrativo" && p2[2]=="Estudiante"?-1:
            (p1[2]=="Estudiante" && p2[2]=="Administrativo"?1:
                (p1[1]<p2[1]?1:(p1[1]>p2[1]?-1:(p1[0]<p2[0]?-1:(p1[0]>p2[0]?1:0))))
            )
        )
    )
);

console.log(personas);