import { identifiers, objects, verbs } from './Words'


export class Mantra {
  create(): string {
    const subject = identifiers[(Math.floor(Math.random() * identifiers.length))]

    const verb = verbs[(Math.floor(Math.random() * verbs.length))]

    const object = objects[(Math.floor(Math.random() * objects.length))]

    return `${subject} will ${verb} ${object}`;
  }

  
  
}