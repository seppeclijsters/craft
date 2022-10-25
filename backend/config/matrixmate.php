<?php

return [
    'fields' => [
        'contentGrid' => [
            'groups' => [[
                'label' => 'Tekst',
                'types' => ['text', 'quote', 'grid', 'services'],
            ], [
                'label' => 'Tekst en Beeld',
                'types' => ['image', 'textAndImage', 'images'],
            ], [
                'label' => 'Gekoppeld',
                'types' => ['collabs', 'jobs', 'offices', 'collective'],
            ], [
                'label' => 'Speciaal',
                'types' => ['form', 'cta', 'textCarousel'],
            ]
        ],
            'types' => [
                'textAndImage' => [
                    'tabs' => [[
                        'label' => 'Inhoud',
                        'fields' => ['image', 'heading', 'text', 'linkIt'],
                    ], [
                        'label' => 'Instellingen',
                        'fields' => ['position', 'bgBlack', 'marginBottom'],
                    ]],
                ],
                'grid' => [
                    'tabs' => [[
                        'label' => 'Inhoud',
                        'fields' => ['blocks'],
                    ], [
                        'label' => 'Instellingen',
                        'fields' => ['bgColor', 'titleSize', 'marginBottom'],
                    ]],
                ],
                'cta' => [
                    'tabs' => [[
                        'label' => 'Inhoud',
                        'fields' => ['image', 'text', 'linkIt'],
                    ], [
                        'label' => 'Instellingen',
                        'fields' => ['marginBottom'],
                    ]],
                ],
                'jobs' => [
                    'tabs' => [[
                        'label' => 'Inhoud',
                        'fields' => ['heading', 'jobs', 'linkIt'],
                    ], [
                        'label' => 'Instellingen',
                        'fields' => ['bgColor', 'marginBottom'],
                    ]],
                ],
            ],
        ],
    ],
];