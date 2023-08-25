import { Component } from '@angular/core';

@Component({
  selector: 'app-allanimals',
  templateUrl: './allanimals.component.html',
  styleUrls: ['./allanimals.component.css']
})
export class AllanimalsComponent {
  animals= [
    {
      name: 'Meowsy',
      species: 'cat',
      foods: {
        likes: ['tuna', 'catnip'],
        dislikes: ['ham', 'zucchini']
      }
    },
    {
      name: 'Barky',
      species: 'dog',
      foods: {
        likes: ['bones', 'carrots'],
        dislikes: ['tuna']
      }
    },
    {
      name: 'Purrpaws',
      species: 'cat',
      foods: {
        likes: ['mice'],
        dislikes: ['cookies']
      }
    },
    {
      name: 'Hopper',
      species: 'rabbit',
      foods: {
        likes: ['carrots', 'lettuce'],
        dislikes: ['meat']
      }
    },
    {
      name: 'Squeaky',
      species: 'mouse',
      foods: {
        likes: ['cheese', 'seeds'],
        dislikes: ['spicy food']
      }
    },
    {
      name: 'Flutter',
      species: 'bird',
      foods: {
        likes: ['seeds', 'fruits'],
        dislikes: ['worms']
      }
    },
    {
      name: 'Slither',
      species: 'snake',
      foods: {
        likes: ['rats', 'eggs'],
        dislikes: ['citrus fruits']
      }
    },
    {
      name: 'Splash',
      species: 'fish',
      foods: {
        likes: ['worms', 'flakes'],
        dislikes: ['bread']
      }
    },
    {
      name: 'Furry',
      species: 'hamster',
      foods: {
        likes: ['seeds', 'fruits'],
        dislikes: ['spicy food']
      }
    },
    {
      name: 'Galloper',
      species: 'horse',
      foods: {
        likes: ['hay', 'apples'],
        dislikes: ['sugary treats']
      }
    },
    {
      name: 'Pouncer',
      species: 'tiger',
      foods: {
        likes: ['deer', 'wild boar'],
        dislikes: ['vegetables']
      }
    },
    {
      name: 'Glimmer',
      species: 'unicorn',
      foods: {
        likes: ['rainbows', 'magic'],
        dislikes: ['ordinary food']
      }
    }
  ]
  fiveAnimals = this.animals.slice(0,5)
}
