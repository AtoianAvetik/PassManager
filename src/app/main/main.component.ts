import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/_services/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    settings = {
        actions: {
            position: 'right',
        },
        add: {
            addButtonContent: '<i class="icon-add"></i>',
            createButtonContent: '<i class="icon-check"></i>',
            cancelButtonContent: '<i class="icon-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="icon-edit"></i>',
            saveButtonContent: '<i class="icon-check"></i>',
            cancelButtonContent: '<i class="icon-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="icon-trash"></i>',
        },
        columns: {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            }
        }
    };
    data = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv'
        },
        {
            id: 11,
            name: 'Nicholas DuBuque',
            username: 'Nicholas.Stanton',
            email: 'Rey.Padberg@rosamond.biz'
        }
    ];

    constructor(public $auth: AuthService) {
    }

    ngOnInit() {
    }

}
