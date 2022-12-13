
// 64130500057 Puntakan Choosri
function countCovidStatus(covidStatusArray) {
  var cs = new Array()
  cs = covidStatusArray
  var n_h = 'positive'
  var n_l = 'negative and low risk'
  var p_o = 'negative and high risk'
  
  for (i = 0; i < cs.length; i++){
    if (covidStatusArray === 'negative and high risk'){
        let nh = 0
        nh++
        return nh 
    }
    else if (covidStatusArray === 'negative and risk'){
        let nl = 0
        nl++
        return nl
    }
    else if (covidStatusArray === 'positive'){
        let po = 0
        po++
        return po
    }
    const covidStatus={}
    if(po > 0){
        covidStatus.positive=po
    }
    else if(nh > 0){
        covidStatus['negative and high risk'] = nh
    }
    else if(nl > 0){
        covidStatus['negative and low risk'] = nl
    }
    return covidStatus
    }
  
 
  if (covidStatusArray === null || covidStatusArray === undefined){
    return undefined
  }
  else if (cs.length == 0){
    return {}
  }
  else{
      return {}
  }
} 
console.log(
    countCovidStatus([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'negative and high risk',
      'positive',
      'negative and low risk'  ])
  )
  console.log(countCovidStatus(['positive', 'negative and low risk', 'positive']))
  console.log(
    countCovidStatus([
      'negative and low risk',
      'positive',
      'negative and low risk',
      'abnormal',
      'negative and high risk',
      'positive',
      ' normal'  ])
  )
  console.log(countCovidStatus(['covid']))
  console.log(countCovidStatus([]))
  console.log(countCovidStatus(null))
