const users = ["Guilherme","gabriel"]

const valores =[
        {
            login: "Guilherme",
            password: "gui123",
            cursos: ["games", "programação web"]
        },
        {
            login: "gabriel",
            password: "gabriel123",
            cursos: ["design", "programação web"]
        }
    ]
console.log(`Meu login  é ${valores[0].login}, minha senha é ${valores[0].password} e faço os cursos ${valores[0].cursos[0]} e ${valores[0].cursos[1]}`)