
var inputs = readline().split(' ')
var _width = parseInt(inputs[0])
var _height = parseInt(inputs[1])
const myId = parseInt(inputs[2])

// given table
let lines = []
for (let i = 0; i < _height; i++) {
    const line = readline();
    lines[i] = line
}


// ####################################################################################################
//   <-------------------------------------  TABLE  ------------------------------------------------>
// ####################################################################################################
var table = []

function set_table()
{
    for (x = 0; x < _width; x++)
    {
        let line = []
        for (let y = 0; y < _height; y++)
        {
            let tile = lines[x][y]
            let pos = {}
            
            pos.x = y
            pos.y = x
            pos.tile = tile
            line.push(pos)
        }
        table.push(line)
    }
}

function is_valid_pos(x, y)
{
    // validates if is out of table's reach
    if (x < 0 || x >= _width)
        return false
    if (y < 0 || y >= _height)
        return false

    // validates if it does note move diagonally
    if(!(x == my_pos.x || y == my_pos.y))
        return false

    // validates if has moved to that tile yet or if it is an island
    // x = island
    // v = visited
    // . - sea

    let cell = table[x][y]
    if (cell.tile === 'x' || cell.tile === 'v')
        return false
    if (cell.tile === '.')
        return true
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
        for (let y = 0; y < _height; y++)
        {
            let pos = get_table_pos(x, y)

            if (pos.tile === 'v')
            {
                pos.tile = '.'
            }
        }
    }
}


// ####################################################################################################
//   <----------------------------------------  ME  ------------------------------------------------>
// ####################################################################################################


var my_life;
var my_pos = {}
var next_pos = {}
var radar = {}

function set_visited_pos()
{
    let pos = get_table_pos(my_pos.x, my_pos.y)
    pos.tile ='v'
}

function find_possible_moves()
{
    let fixed_init_x
    let fixed_end_x


//gotta make it better one day.. haha
// -------------------------------------------------------------
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


// ####################################################################################################
//   <-------------------------------------  ENEMY ------------------------------------------------->
// ####################################################################################################


var enemy_life
var opponents_orders

// not implemented
function translate_opponents_orderes(opponent_order)
{
    return opponent_order
}


// ####################################################################################################
//   <------------------------------------- INIT GAME ---------------------------------------------->
// ####################################################################################################


set_table()

function find_init_pos()
{
    let possible_init_pos = []

    for (let x = 0; x < _width; x++)
    {
        for (let y = 0; y < _height; y++)
        {
            let pos = get_table_pos(x,y)

            if (pos.tile === '.') {
                possible_init_pos.push(pos)
            }
        }
    }
    return possible_init_pos
}

let poss_init_pos = find_init_pos()
let s = poss_init_pos.length
let found_pos = poss_init_pos[Math.floor(s/2)]
let init_pos = get_formatted_pos(found_pos)

// ####################################################################################################
//   <-------------------------------------  GAME  ------------------------------------------------->
// ####################################################################################################


function set_turn_info()
{
    my_pos.x = parseInt(inputs[0])
    my_pos.y = parseInt(inputs[1])
    my_life = parseInt(inputs[2])
    
    set_visited_pos()
    
    radar.torpedo_cooldown = parseInt(inputs[4])
    radar.sonar_cooldown = parseInt(inputs[5])
    radar.silence_cooldown = parseInt(inputs[6])
    radar.mine_cooldown = parseInt(inputs[7])
    radar.sonar_result = readline()

    enemy_life = parseInt(inputs[3])
    opponents_orders = translate_opponents_orderes(readline())
}

var turn = 0

// initial position
console.log(init_pos)

while (true) {

    var inputs = readline().split(' ')
    set_turn_info()

    let action = get_selected_action()
    console.log(action);
    turn++;
}


// ####################################################################################################
//   <--------------------------------------  TOOLS  ----------------------------------------------->
// ####################################################################################################


function get_formatted_pos(pos)
{
    return pos.x+' '+pos.y
}


// ####################################################################################################
//   <-------------------------------------  ACTION  ----------------------------------------------->
// ####################################################################################################

function move(direction)
{
    let move = 'MOVE ' + direction
    return move
}

function surface()
{
    clear_visited_positions()
    return 'SURFACE'
}


// not implemented yet!
function get_selected_action()
{

    let possible_moves = find_possible_moves()
    let has_where_to_move =(possible_moves.length > 0)
    
    if(!has_where_to_move)
        return surface()
    
    let moved_pos = possible_moves[0]
    let direction = get_direction_move(moved_pos)
    let action = move(direction)

    return action
}

function get_direction_move(moved_pos)
{
    if (moved_pos.x > my_pos.x)
        return 'W'
    if (moved_pos.x < my_pos.x)
        return 'E'
    if (moved_pos.y > my_pos.y)
        return 'N'
    if (moved_pos.y < my_pos.y)
        return 'S'
}