/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ')
const INIT_X = 7
const INIT_Y = 7
const _width = parseInt(inputs[0])
const _height = parseInt(inputs[1])
const myId = parseInt(inputs[2])

// #############################################################################
// -------------  TABLE  -----------------------

var table = []
var cell = {}

function set_table()
{

    // use POS strategy.. put some attributes into it

    let lines
    for (let y = 0; y < _height; x++) {
        const line = readline()
        lines.push(line)
    }

    for (x = 0; x <_width;x++)
    {
        const line = readline()
        for (let y = 0; y < _height; y++)
        {
            let pos = {}
            let tile = lines[y]
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
    console.error('table')
    let col = table[x]
    let cell = col[y]

    if (cell === 'x')
        return true
    return false
}


function get_table_pos(x, y)
{
    let col = table[x]
    let pos = col[y]

    return pos
}

function out_of_table(x, y)
{
    if (x < 0 || x > _width)
        return true
    if (y < 0 || y > _height)
        return true
    return false
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
    return get_possible_moves().length == 0
}

function have_visited_before(x, y)
{
    if (table[x][y] != 'v')
        return true
    return false
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
    pos = 'v'
}

function find_possibles_moves()
{
    let possible_moves = []

    my_pos.x = 0
    my_pos.y = 0

// -------------------------------------------------------------

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


    let fixed_init_x
    let fixed_end_x

// -------------------------------------------------------------

    let fixed_init_y
    let fixed_end_y

    if (my_pos.y == 0)
        fixed_init_y = 0
    else
        fixed_init_y = my_pos.y-1

    if (my_pos.y == _width)
        fixed_end_y = _width
    else
        fixed_end_y = my_pos.x+1

// --------------------------------------------------------------
    
    let possible_moves = []

    for (let x = fixed_init_x; x < fixed_end_x; x++)
    {
        for (let y = my_pos.y-1; y < fixed_end_y; y++)
        {

            let cell = table[x][y]

            if (cell === '.')
                possible_moves.push_back(cell)

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