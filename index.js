/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ')
const _width = parseInt(inputs[0])
const _height = parseInt(inputs[1])
const myId = parseInt(inputs[2])

// #############################################################################
// -------------  TABLE  -----------------------

var table = []
var cell = {}

function set_table()
{
    for (x = 0; x < _width; x++)
    {
        let line = []
        for (let y = 0; y < _height; y++)
        {
            let tile = lines[x][y]
            let pos = {}
            
            pos.x = x
            pos.y = y
            pos.tile = tile
            
            line.push(pos)
        }
        table.push(line)
    }
}

function is_valid_pos(x, y)
{
    if (x < 0 || x >= _width)
        return false
    if (y < 0 || y >= _height)
        return false
    
    let cell = table[x][y]
    console.log(cell)
    if (cell.tile === 'x' || cell.tile === 'v')
        return false
    return true
}

function get_table_pos(x, y)
{
    let pos = table[x][y]
    return pos
}

function clear_visited_positions()
{
    for (let x = 0; x < _width; x++)
    {
        for (let y = 0; j < _height; j++)
        {
            let pos = get_table_pos(x, y)

            if (pos === 'v')
                pos = '.'
        }
    }
}


// #############################################################################
// <---------------------------  PEOPLE  -------------------------------------->


function has_where_to_move()
{
    return get_possible_moves().length > 0
}


// #############################################################################
// <-----------------------------  ME  ---------------------------------------->


var init_pos = '7 7'
var my_life;
var my_pos = {}
var radar = {}

function set_visited_pos
{
    let pos = get_table_pos(my_pos.x, my_pos.y)
    pos.tile ='v'
}

function find_possibles_moves()
{
    let fixed_init_x
    let fixed_end_x

    if (my_pos.x == 0)
        fixed_init_x = 0
    else
        fixed_init_x = my_pos.x-1

    if (my_pos.x == _width)
        fixed_end_x = _width
    else
        fixed_end_x = my_pos.x+1

// -------------------------------------------------------------

    let fixed_init_y
    let fixed_end_y

    if (my_pos.y == 0)
        fixed_init_y = 0
    else
        fixed_init_y = my_pos.y-1

    if (my_pos.y == _height)
        fixed_end_y = _height
    else
        fixed_end_y = my_pos.x+1

// --------------------------------------------------------------
    
    let possible_moves = []

    for (let x = fixed_init_x; x < fixed_end_x+1; x++)
    {
        for (let y = fixed_init_y; y < fixed_end_y+1; y++)
        {
            if(is_valid_pos(x, y))
            {
                let pos = get_table_pos(x,y)
                possible_moves.push(pos)
            }
        }
    }

    return possible_moves
}


// #############################################################################
// <--------------------------  ENEMY --------------------------------------->


var enemy_life
var opponents_orders

function translate_opponents_orderes(opponent_order)
{

}

// #############################################################################
// --------------------------- INIT GAME ------------------------------------>


let lines = []
for (let i = 0; i < _height; i++) {
    const line = readline();
    lines[i] = line
}

set_table()

function set_turn_info()
{
    my_pos.x = parseInt(inputs[0])
    my_pos.y = parseInt(inputs[1])
    my_life = parseInt(inputs[2])
    
    radar.torpedo_cooldown = parseInt(inputs[4])
    radar.sonar_cooldown = parseInt(inputs[5])
    radar.silence_cooldown = parseInt(inputs[6])
    radar.mine_cooldown = parseInt(inputs[7])
    radar.sonar_result = readline()

    enemy_life = parseInt(inputs[3])
    opponents_orders = translate_opponents_orderes(readline())
}


// #############################################################################
// ----------------------------  GAME  -------------------------------------->


var turn = 0

set_table()

console.log(init_pos)
while (true) {
    
    //to get where it cannot go
    var inputs = readline().split(' ')
    set_turn_info()
    //------------------------------------------------------------

    console.log(init_pos);
    turn++;
}

// ------------------- TOOLS  -----------------------------------------
function get_formatted_pos(x, y)
{
    return x+' '+y
}