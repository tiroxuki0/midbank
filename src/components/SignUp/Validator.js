function Validator(formSelector){
    /* get form element need to be validate  */
    const formElement = document.querySelector(formSelector)

    const validateRules = {
        required: function(value){
            return value ? undefined : 'Vui lòng nhập trường này!'
        },
        email: function(value){
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return value.match(regex) ? undefined : 'Vui lòng nhập email!'
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự!`
            }
        }
    }
    const data = {}
    const formRules = {}
    const inputs = formElement.querySelectorAll('[name]')
    inputs.forEach(input=>{
        const rules = input.getAttribute('rules')
        const inputRules = rules.split('|')
        const rulesConvert = inputRules.reduce((resultRules, current) => {
            let handleRule = validateRules[current]
            if(current.includes(':')){
                const ruleInfo = current.split(':')
                current = ruleInfo[0]
                handleRule = validateRules[current](ruleInfo[1])
            }
            return resultRules = [... resultRules, handleRule]
        },[])
        formRules[input.name] = rulesConvert

        input.onblur = handleValidate
        input.onchange = handleValidate
        input.oninput = handleClearError
    })

    function getParent(selector, elementParent){
        while(selector.parentElement){
            if(selector.parentElement.matches(elementParent)){
                return selector.parentElement
            }
            selector = selector.parentElement
        }
    }

    function handleClearError(e){
        const parentOfThis = getParent(e.target, '.formGroup')
        const messageElement = parentOfThis.querySelector('.formMessage')
        parentOfThis.classList.remove('notValid')
        messageElement.innerText = ''
    }

    function handleValidate(e){
        const rules = formRules[e.target.name]
        let errorMessage
        switch(e.target.type){
            case "checkbox":
                for(var rule of rules){
                    errorMessage = rule(formElement.querySelector('input[type="checkbox"]:checked'))  
                }

                let listCheck = []
                const isCheckNodeList = formElement.querySelectorAll('input[type="checkbox"]:checked')
                const isCheckArray = Array.from(isCheckNodeList)
                if(isCheckNodeList.length > 0){
                    listCheck = isCheckArray.reduce((list, cur)=>{
                        return list = [...list, cur.value]
                    },[]) 
                }
                data[e.target.name] = listCheck
                break;
            case "radio":
                const isCheck = formElement.querySelector('input[type="radio"]:checked')
                for(var rule of rules){
                    errorMessage = rule(isCheck)
                }
                if(isCheck){
                    data[e.target.name] = isCheck.value
                }
                break;
            case "select-one":
                const valueSelect = e.target.value
                for(var rule of rules){
                    if(valueSelect !== formElement.querySelector('select')[0].value){
                        errorMessage = rule(valueSelect)
                        data[e.target.name] = valueSelect
                    }else{
                        errorMessage = rule(undefined)
                    }
                } 
                console.log(errorMessage);
                break;
            default:
                for(var rule of rules){
                    errorMessage = rule(e.target.value)
                    if(errorMessage !== undefined){
                        break;
                    }
                }
                data[e.target.name] = e.target.value
        }
        const parentOfThis = getParent(e.target, '.formGroup')
        const messageElement = parentOfThis.querySelector('.formMessage')
        if(errorMessage !== undefined){
            parentOfThis.classList.add('notValid')
            messageElement.innerText = errorMessage
        }
    }

    formElement.querySelector('.submit').onclick = (e) =>{
        e.preventDefault()
        inputs.forEach(input=>{
            handleValidate({target: input})
        })
        console.log('data: ',data)
    }
}

export default Validator