﻿const productsMock = [
    {
        id: 'aaa',
        shortName: 'Товар ааа',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '1',
        description: 'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании форм развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.',
    },
    {
        id: 'bbb',
        shortName: 'Товар bbb',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '2',
        description: 'Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Товарищи! реализация намеченных плановых заданий требуют от нас анализа модели развития.',
    },
    {
        id: 'ccc',
        shortName: 'Товар ccc',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '1',
        description: 'Равным образом реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Не следует, однако забывать, что новая модель организационной деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.',
    },
    {
        id: 'ddd',
        shortName: 'Товар ddd',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '1',
        description: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание модели развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Разнообразный и богатый опыт новая модель организационной деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.',
    },
    {
        id: 'fff',
        shortName: 'Товар fff',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '3',
        description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа соответствующий условий активизации. Идейные соображения высшего порядка, а также новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
    },
    {
        id: 'ggg',
        shortName: 'Товар ggg',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '3',
        description: 'Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации форм развития. Равным образом укрепление и развитие структуры играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности требуют определения и уточнения существенных финансовых и административных условий. Равным образом сложившаяся структура организации способствует подготовки и реализации дальнейших направлений развития.',
    },
    {
        id: 'hhh',
        shortName: 'Товар hhh',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '2',
        description: 'Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание модели развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании форм развития.',
    },
    {
        id: 'jjj',
        shortName: 'Товар jjj',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '4',
        description: 'Товарищи! начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Товарищи! реализация намеченных плановых заданий способствует подготовки и реализации модели развития. Товарищи! постоянный количественный рост и сфера нашей активности позволяет оценить значение направлений прогрессивного развития. Не следует, однако забывать, что рамки и место обучения кадров способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.',
    },
    {
        id: 'kkk',
        shortName: 'Товар kkk',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '5',
        description: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Равным образом укрепление и развитие структуры требуют определения и уточнения новых предложений.',
    },
    {
        id: 'lll',
        shortName: 'Товар lll',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '6',
        description: 'Повседневная практика показывает, что укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. С другой стороны консультация с широким активом позволяет оценить значение систем массового участия. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа модели развития. Товарищи! дальнейшее развитие различных форм деятельности требуют определения и уточнения новых предложений.',
    },
    {
        id: 'zzz',
        shortName: 'Товар zzz',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '6',
        description: 'Таким образом рамки и место обучения кадров требуют определения и уточнения дальнейших направлений развития. Таким образом сложившаяся структура организации позволяет оценить значение новых предложений. Задача организации, в особенности же сложившаяся структура организации требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач.',
    },
    {
        id: 'xxx',
        shortName: 'Товар xxx',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '3',
        description: 'С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений. С другой стороны рамки и место обучения кадров позволяет выполнять важные задания по разработке соответствующий условий активизации.',
    },
    {
        id: 'ccc',
        shortName: 'Товар ccc',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '3',
        description: 'Задача организации, в особенности же начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Равным образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений. Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании модели развития.',
    },
    {
        id: 'vvv',
        shortName: 'Товар vvv',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '3',
        description: 'С другой стороны консультация с широким активом представляет собой интересный эксперимент проверки форм развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения соответствующий условий активизации.',
    },
    {
        id: 'qqq',
        shortName: 'Товар qqq',
        name: 'Супер товар Супер товар Супер товар Супер товар',
        categoryId: '7',
        description: 'С другой стороны сложившаяся структура организации представляет собой интересный эксперимент проверки модели развития. Равным образом рамки и место обучения кадров играет важную роль в формировании систем массового участия. Идейные соображения высшего порядка, а также новая модель организационной деятельности способствует подготовки и реализации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития.',
    },
    
];

export default productsMock;