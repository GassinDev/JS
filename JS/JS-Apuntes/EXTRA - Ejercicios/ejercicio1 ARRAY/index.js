function createObj (p1, p2) {
    return {
      p1,
      p2
    }
  }
  
  function createExtendedObj (p1, p2, p3, p4) {
    return {
      ...createObj(p1, p2),
      p3,
      p4
    }
  }
  
  function extendObj (obj, p3, p4) {
    return {
      ...obj,
      p3,
      p4
    }
  }
  
  const obj1 = createObj(1, 2)
  const obj2 = createExtendedObj(1, 2, 3, 4)
  const obj3 = extendObj(obj1, 3, 4)
  
  console.log('obj1', obj1)
  console.log('obj2', obj2)
  console.log('obj3', obj3)