module.exports.insert = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '新增成功',
    data: {},
  })
}

module.exports.update = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '编辑成功',
    data: {},
  })
}

module.exports.selectById = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '获取详情成功',
    data: {
      input: '周政',
      textarea: '蟠龙路',
      select: 4,
      switch: true,
      radio: 'man',
      checkbox: ['sichuan', 'hubei'],
      dateInputsecond: '2021-1-21 23:59:59',
      dateInput: '2021-1-21',
      monthPicker: '2021-1-21',
      timePicker: '2021-1-21 23:59:59',
      slider: 90,
      upload: [
        {
          data_url:
            'https://img1.baidu.com/it/u=793269991,2224346596&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          file: {
            name: '周政.png',
            type: 'application/jpg',
          },
        },
      ],
      selectMultiple: [
        { value: 1, label: '苹果' },
        { value: 2, label: '西瓜' },
      ],
    },
  })
}

module.exports.upload = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '获取详情成功',
    uid: '1234',
  })
}