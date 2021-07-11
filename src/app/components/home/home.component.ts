import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Food } from 'src/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: number;
  cuisine: Food[] = [
    {
      name: 'Authentic Tortellini Soup', 
      image: 'https://www.smalltownwoman.com/wp-content/uploads/2020/09/Tortellini-Soup-DSC_0937-Recipe-Card.jpg',
      description: 'This simple soup with cheese tortellini, Italian sausage, and chopped fresh spinach.',
      price: 5.99  
    },
    {
      name: 'Bucatini All Amatriciana', 
      image: 'https://rms.condenast.it/rms/public/5d3/f04/a99/5d3f04a9954c9355630844.jpg',
      description: 'A simple tomato sauce with crispy guanciale is tossed with bucatini pasta for a quick, delicious, and authentic Italian dish',
      price: 9.99  
    },
    {
      name: 'Insalata Caprese', 
      image: 'https://cdn.ilclubdellericette.it/wp-content/uploads/2018/04/ricetta-insalata-caprese-1200x630.jpg',
      description: 'Caprese salad is a famous Italian salad made of fresh sliced tomatoes, mozzarella cheese, garnished with olive oil, acetate balsamico, and fresh basil leaves',
      price: 12.99  
    },
    {
      name: 'Tomato Spinach Tortellini', 
      image: 'https://www.eatwell101.com/wp-content/uploads/2017/09/tomato-spinach-tortellini-recipe-2.jpg',
      description: 'Tortellini are popular button-shaped pasta filled with meat, cheese, nutmeg and egg, cooked in water, stir-fried with sage and butter and served with broth. ',
      price: 12.99  
    },
    {
      name: 'Minestrone Soup', 
      image: 'https://www.worldtravelconnector.com/wp-content/uploads/2020/01/Traditional-Italian-foods-in-Italy_Minestrone-soup.jpg',
      description: 'Popular Minestrone soup is one of the most common foods in Italy. Minestrone is a thick vegetable soup made with pasta and rice and a tomato-based broth.',
      price: 12.99  
    },
    {
      name: 'Bruschetta', 
      image: 'https://www.worldtravelconnector.com/wp-content/uploads/2020/01/Foods-in-Italy_bruschetta.jpg',
      description: 'Crispy bruschetta is a famous Italian appetizer referring to grilled bread traditionally scrubbed with garlic and garnished with olive oil and salt.',
      price: 7.99  
    },
    {
      name: 'Creamy Tuscan Ravioli', 
      image: 'https://ocdn.eu/pulscms-transforms/1/pg8k9kpTURBXy9iNzMxNjE4ODNiODAwMTYzN2JjOWM2NTMwYTFkOWVlMy5qcGeSlQMAzQGVzQWgzQMqkwXNAoDNAUCBoTAA',
      description: 'Tuscan ravioli tossed in a creamy Tuscan inspired sun-dried tomato sauce.',
      price: 13.99  
    },
    {
      name: 'Spaghetti Carbonara', 
      image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg',
      description: 'Our best spaghetti carbona recipe is silky with egg and melted cheese, freshened with parsley, and spiked with black pepper.',
      price: 13.99  
    },
    {
      name: 'Pizza Siciliana', 
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/68/21/0a/pizza-pizza-siciliana.jpg',
      description: 'Also known as sfincione, Sicilian-style pizza has a thick crust with a fluffy, sponge-like consistency. It is baked in a rectangular shaped pan, topped with tomato sauce, anchovies, onions, oregano, and a hard sheeps milk cheese. For the final touch, the pizza is covered in breadcrumbs which help absorb some of the oil from the ingredient.',
      price: 13.99  
    }
  ]


  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('userid'));
  }

  addToCart(food: Food) {
    this._userService.getUserById(this.id).subscribe((user) => {
      user.cart.push(food);
      this._userService.updateUser(user).subscribe((res) => alert(food.name + ' has been added to your cart.'));
    });
  }

}
