const cl = console.log;

const snackBar = (msg, icon) => {
    swal.fire({
        title : msg,
        icon : icon,
        timer : 3000,
    })
}

const hrCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.3 ? false : true;
            if(!error){
                resolve('Candidate is selected for first technical interview!!')
            }else{
                reject('Looking for another candidate!!!')
            }
        }, 1500);
    })
}

const firstTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.3 ? false : true;
            if(!error){
                resolve('Candidate is selected for second technical interview!!')
            }else{
                reject('candidate is not good in basics!!!')
            }
        }, 1000);
    })
}

const secTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.3 ? false : true;
            if(!error){
                resolve('Candidate is selected for third technical interview!!')
            }else{
                reject('candidate is struggling to write code!!!')
            }
        }, 800);
    })
}

const thirdTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= 0.3 ? false : true;
            if(!error){
                resolve('Candidate is selected!!')
            }else{
                reject('candidate is rejected!!!')
            }
        }, 500);
    })
}

hrCall()
.then(res => {
    cl(res)
    return firstTechInt()
})
.then(res => {
    cl(res);
    return secTechInt();
})
.then(res => {
    cl(res);
    return thirdTechInt();
})
.then(res => {
   snackBar(res, 'success')
})
.catch(err => {
    snackBar(err, 'error')
})

