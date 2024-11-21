<?php
declare(strict_types=1);

namespace ISP\Skeleton\Eel\Helper;

use Neos\Flow\Annotations as Flow;
use Neos\Eel\ProtectedContextAwareInterface;
use MatthiasMullie\Minify\CSS;
use MatthiasMullie\Minify\JS;

class MinifyHelper implements ProtectedContextAwareInterface {

    /**
     * Minify incoming css using matthiasmullie/minify package
     *
     * @param $text string
     * @return string
     */
    public function minifyCSS(string $text = null) {

        $text = new CSS($text);
        
        return $text->execute();

    }

    /**
     * Minify incoming js using matthiasmullie/minify package
     *
     * @param $text string
     * @return string
     */
    public function minifyJS(string $text = null) {

        $text = new JS($text);
        
        return $text->execute();

    }

    /**
     * All methods are considered safe, i.e. can be executed from within Eel
     *
     * @param string $methodName
     * @return boolean
     */
    public function allowsCallOfMethod($methodName) {
        return true;
    }
}