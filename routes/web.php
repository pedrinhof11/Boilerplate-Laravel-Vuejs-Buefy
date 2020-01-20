<?php

Route::get('{path}', 'IndexController')->where('path', '(.*)');
