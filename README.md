# Home Assistant Sports Card
A Home Assistant frontend custom card for the [vasqued2/ha-teamtracker](https://github.com/vasqued2/ha-teamtracker) integration.  Based on [D34DC3N73R/ha-nfl-card] by @D34DC3N73R.

#### &nbsp;&nbsp;&nbsp;PREGAME

![pregame](https://user-images.githubusercontent.com/9123670/138403165-fe83a2f1-7ecd-4b47-8915-17c84d69a8e5.png)

#### &nbsp;&nbsp;&nbsp;IN GAME

![ingame](https://user-images.githubusercontent.com/9123670/138606167-0d6416e4-e58b-454f-8cc3-e67dcbf42372.png)

#### &nbsp;&nbsp;&nbsp;POSTGAME

![postgame](https://user-images.githubusercontent.com/9123670/138403233-c61f13d8-6aad-43ac-ae45-213b767d7f96.png)

#### &nbsp;&nbsp;&nbsp;BYE

![bye](https://user-images.githubusercontent.com/9123670/138403291-bbded2aa-c8d4-42f7-b7bf-1578436c1076.png)


## HACS Installation
 - In the HACS UI, click the 3 dots in the upper right
 - Click 'Add Custom Repository'
 - Fill in the repo url https://github.com/D34DC3N73R/ha-teamtracker-card and choose 'Lovelace' category.
 - install the custom card
 - Add the following to your resources
```
url: /hacsfiles/ha-teamtracker-card/ha-teamtracker-card.js
type: module
```

## Manual Installation
 - Download [ha-teamtracker-card.js](https://raw.githubusercontent.com/D34DC3N73R/ha-nfl-card/main/dist/ha-nfl-card.js)
 - Copy to www/community/ha-teamtracker-card/ (make the ha-teamtracker-card directory)
 - Add the following to your resources
```
url: /hacsfiles/ha-teamtracker-card/ha-teamtracker-card.js
type: module
```

## Options
| Name | Description | Default | Required |  Values |
| --- | --- | --- | --- | --- |
| `entity` | Name of ha-teamtracker sensor | `sensor.team_tracker` | Yes  | Valid sensor |
| `outline` | Outline team colors (helpful w/ dark themes) |`false` | No |  `true` `false` |
| `outline_color` | Specifies outline color. | `white` | No |  CSS color or hex value  |

## Examples
```
type: 'custom:teamtracker-card'
entity: sensor.team_tracker
outline: true
outline_color: deeppink
```
![example](https://user-images.githubusercontent.com/9123670/138405243-8e42db4f-7d69-40bc-8ea7-624c31a957a9.png)


```
type: 'custom:teamtracker-card'
entity: sensor.team_tracker
outline: true
outline_color: '#ffe500'
```
![example2](https://user-images.githubusercontent.com/9123670/138405612-8efbb117-4f4b-4eb9-8ef0-339e9b35c868.png)

## Minimal Required Configuration
```
type: 'custom:teamtracker-card'
entity: sensor.team_tracker
```
Where `sensor.team_tracker` is the sensor name from the [ha-teamtracker](https://github.com/vasqued2/ha-teamtracker) integration.
