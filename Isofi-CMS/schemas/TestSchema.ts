// ./custom-array.js

import {defineField, defineType} from 'sanity'
import Preview from './../@Isofi/customs/components/@Preview';

export const TestSchema = defineType({
    name: 'test',
    title: 'Testing',
    type: 'document',
    fields: [
        defineField({
            type: 'array',
            name: 'arrayOfObjects',
            title: 'Array of objects',
            of: [
              {
                type: 'object',
                name: 'myObject',
                title: 'My object',
                components: {
                  preview: Preview // Add custom preview component
                }, 
                fields: [
                  {
                    type: 'string',
                    name: 'myString',
                    title: 'My string',
                  },
                  {
                    type: 'image',
                    name: 'myImage',
                    title: 'My image',
                  },
                ],
              },
            ],
          })
          
    ]
}) 
export default TestSchema;